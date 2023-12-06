import os

MODEL_CHECKPOINT = "t5-base"
MAX_INPUT_LENGTH = 1024
MAX_TARGET_LENGTH = 128
BATCH_SIZE = 4
NUM_TRAIN_EPOCH = 3
WEIGHT_DECAY = 0.01
WANDB_PROJECT_NAME = "mailai_summarization"
DATASET = "ccdv/arxiv-summarization"

ROOT_DIR = os.path.dirname(__file__)
OUTPUT_DIR = os.path.join(ROOT_DIR, "results")
LOG_DIR = os.path.join(ROOT_DIR, 'logs')
