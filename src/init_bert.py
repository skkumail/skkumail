#!/bin/python3
import logging
import os
import yaml

from keybert import KeyBERT
from transformers import pipeline, BertTokenizer, Pipeline

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


def init_bert():
    try:
        config_path = os.path.join(os.path.dirname(__file__), 'model_config.yaml')
        with open(config_path, 'r') as file:
            config = yaml.safe_load(file)
        bert_config = config['bert']

        logger.info("Loaded BERT configurations from %s", config_path)

        summary_model = bert_config['summary-model']
        keyword_model = bert_config['keyword-model']
        tokenizer_model = bert_config['tokenizer']

        logger.info("Summary model: %s", summary_model)
        logger.info("Keyword model: %s", keyword_model)
        logger.info("Tokenizer model: %s", tokenizer_model)

        logger.info("Initialize BERT Models")
        summarizer: Pipeline = pipeline("summarization", model=summary_model)
        keybert: KeyBERT = KeyBERT(model=keyword_model)
        tokenizer: BertTokenizer = BertTokenizer.from_pretrained(tokenizer_model)

        logger.info("Done")
        logger.info("KeyBERT initialized with model:\n%s", keybert.__str__())
        logger.info("Summarizer pipeline initialized with model:\n%s", summarizer.__str__())
        logger.info("BERT tokenizer initialized with model:\n%s", tokenizer.__str__())

    except Exception as e:
        logger.error("Error initializing BERT models: %s", e)
        raise


if __name__ == '__main__':
    init_bert()
