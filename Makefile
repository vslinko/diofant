PROBLEMS := $(wildcard problems/*)
ANSWERS := $(wildcard problems/*/answer.txt)

all: $(PROBLEMS)

answers: $(ANSWERS)

$(PROBLEMS):
	$(MAKE) -C $@

$(ANSWERS):
	@echo -n '$@: '
	@cat $@
	@echo

.PHONY: all answers $(PROBLEMS) $(ANSWERS)
