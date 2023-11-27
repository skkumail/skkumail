.PHONY: pull up down help logs build

SERVICES := db doc web nginx-proxy nginx-letsencrypt

help:
	@echo "Usage: make [action] service=<service>"
	@echo "  action: pull, up, down, logs, build"
	@echo "  service: all, $(SERVICES)"

# 자동 문서화 추가
docs: src/* Doxyfile
	#@doxygen Doxyfile
	@./build_docs.sh

check-service:
ifndef service
	$(error service is undefined. Use 'all' for all services or specify one: $(SERVICES))
endif
	@if [ "$(service)" != "all" ] && ! echo $(SERVICES) | grep -q "$(service)"; then \
		echo "Invalid service: $(service). Use 'all' for all services or specify one: $(SERVICES)"; \
		exit 1; \
	fi

pull: check-service
	@if [ "$(service)" = "all" ]; then \
		sudo docker-compose pull; \
	else \
		sudo docker-compose pull $(service); \
	fi

build: check-service docs
	@if [ "$(service)" = "all" ]; then \
		sudo docker-compose build; \
	else \
		sudo docker-compose build $(service); \
	fi

up: check-service
	@if [ "$(service)" = "all" ]; then \
		sudo docker-compose up -d; \
	else \
		sudo docker-compose up -d $(service); \
	fi

down: check-service
	@if [ "$(service)" = "all" ]; then \
		sudo docker-compose down; \
	else \
		sudo docker-compose stop $(service); \
	fi

logs: check-service
	@if [ "$(service)" = "all" ]; then \
		echo "Log는 서비스당 한 개씩만 가능"; \
	else \
		sudo docker-compose logs -f $(service); \
	fi
