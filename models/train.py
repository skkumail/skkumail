import wandb
from datasets import load_dataset
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, TrainingArguments, Trainer
from params import WANDB_PROJECT_NAME, DATASET, MODEL_CHECKPOINT, OUTPUT_DIR

wandb.init(project=WANDB_PROJECT_NAME)

dataset = load_dataset(DATASET)


model_checkpoint = MODEL_CHECKPOINT
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)


def preprocess_function(examples):
    inputs = [doc for doc in examples["article"]]
    model_inputs = tokenizer(inputs, max_length=512, truncation=True)

    with tokenizer.as_target_tokenizer():
        labels = tokenizer(examples["abstract"],
                           max_length=128, truncation=True)

    model_inputs["labels"] = labels["input_ids"]
    return model_inputs


tokenized_datasets = dataset.map(preprocess_function, batched=True)

training_args = TrainingArguments(
    output_dir=OUTPUT_DIR,
    per_device_train_batch_size=4,
    per_device_eval_batch_size=4,
    num_train_epochs=3,
    weight_decay=0.01,
    logging_dir='./logs',
    logging_strategy='steps',
    logging_steps=50,
    evaluation_strategy="steps",
    eval_steps=500,
    save_strategy="no",
    report_to="wandb"
)

model = AutoModelForSeq2SeqLM.from_pretrained(model_checkpoint)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_datasets["train"],
    eval_dataset=tokenized_datasets["validation"],
)

trainer.train()

trainer.evaluate(eval_dataset=tokenized_datasets["test"])
