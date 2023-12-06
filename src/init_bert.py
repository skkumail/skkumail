#!/bin/python3
# entrypoint.sh에서 사용
import logging
import os

from keybert import KeyBERT
from transformers import pipeline, AutoTokenizer, Pipeline


def init_bert():
    logger = logging.getLogger(__name__)
    keybert: KeyBERT = KeyBERT()
    summarizer: Pipeline = pipeline("summarization", model="facebook/bart-large-cnn")
    tokenizer: AutoTokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')

    # Log the information
    logger.info("KeyBERT initialized: %s", keybert.__str__())
    logger.info("Summarizer pipeline initialized: %s", summarizer.__str__())
    logger.info("BERT tokenizer initialized: %s", tokenizer.__str__())


if __name__ == '__main__':
    init_bert()  # for caching
