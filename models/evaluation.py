import pandas as pd
import seaborn as sns
from transformers import BartForConditionalGeneration, BartTokenizer
from datasets import load_dataset, load_metric
import torch

model = BartForConditionalGeneration.from_pretrained('facebook/bart-large-cnn')
tokenizer = BartTokenizer.from_pretrained('facebook/bart-large-cnn')

dataset = load_dataset("cnn_dailymail", '3.0.0')

rouge = load_metric('rouge')

def generate_summary(batch):
    inputs = tokenizer(batch['article'], max_length=1024, return_tensors='pt', truncation=True)
    summary_ids = model.generate(inputs['input_ids'])
    batch['predicted_summary'] = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return batch

results = dataset['validation'].map(generate_summary)

scores = rouge.compute(predictions=results['predicted_summary'], references=results['highlights'])

df_scores = pd.DataFrame(scores)
df_scores.to_csv('evaluation_scores.csv')

sns.set_theme(style="whitegrid")
ax = sns.barplot(data=df_scores)
ax.set_title('BART Model Evaluation on CNN/DailyMail')
ax.set_ylabel('Scores')
ax.set_xlabel('Metrics')

