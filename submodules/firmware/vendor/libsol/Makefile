mode = release
target := $(shell uname -s)
variant = $(target)_$(mode)
o = target/$(variant)
ifeq ($(EMULATOR),1)
CC       ?= gcc
LD       := $(CC)
OBJCOPY  := objcopy
OBJDUMP  := objdump
AR       := ar
AS       := as
else
PREFIX   ?= arm-none-eabi-
CC       := $(PREFIX)gcc
LD       := $(PREFIX)gcc
OBJCOPY  := $(PREFIX)objcopy
OBJDUMP  := $(PREFIX)objdump
AR       := $(PREFIX)ar
AS       := $(PREFIX)as

CPUFLAGS ?= -mcpu=cortex-m3 -mthumb
FPUFLAGS ?= -msoft-float
endif
test_files := $(wildcard *_test.c)
test_exes = $(patsubst %.c,$o/%,$(test_files))
test_oks = $(addsuffix .ok,$(test_exes))
ifeq ($(EMULATOR),1)
all: $(test_oks) $(test_exes) libsol.a
else
all: libsol.a
endif
CFLAGS += -Werror -Wall -Wextra -pedantic -Wshadow -Wcast-qual -Wcast-align -Wno-unused-parameter -Wno-gnu-folding-constant
CFLAGS += -Iinclude
CFLAGS += $($(mode)_CFLAGS)
CFLAGS += -ffunction-sections -fdata-sections $(CPUFLAGS) $(FPUFLAGS) 


debug_CFLAGS = -g -fsanitize=address -fsanitize=undefined
release_CFLAGS = -Os

libsol_source_files = $(filter-out %_test.c,$(wildcard *.c))
libsol_object_files = $(patsubst %.c,$o/%.o,$(libsol_source_files))
libsol_depend_files = $(patsubst %.c,$o/%.d,$(libsol_source_files))

-include $(libsol_depend_files)

$o/%.o: %.c
	@echo "==> Compile $<"
	@mkdir -p $(@D)
	$(CC) -MMD -c $(CFLAGS) $< -o $@

#
# unit tests
#
# Note: this executes on the host, not via QEMU
$o/%_test.ok: $o/%_test
	@echo "==> Run test $<"
	@$<
	@touch $@

$o/%_test: $o/%_test.o libsol.a
	@echo "==> Link test $@"
	$(CC) $(CFLAGS) -o $@ $^

#
# libsol
#
libsol.a: $(libsol_object_files)
	@echo "==> Create static library $@"
	ar rcs $@ $^

#
# clean
#
.PHONY: clean
clean:
	@echo "==> Clean build directory"
	rm -rf target libsol.a
