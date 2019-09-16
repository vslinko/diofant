# Решения задач проекта Diofant.ru

## Установка

Перед установкой решений необходимо установить libgmp.

Для Debian-based систем:

```shell
sudo aptitude install libgmp3-dev
```

Для OS X:

```shell
brew install gmp
```

После можно установить сами решения:

```shell
git clone https://github.com/vslinko/diofant.git
cd diofant
```

## Использование

* Проверить все задачи: `make`
* Проверить задачу: `make problems/1059`
* Узнать решение всех задач: `make answers`
* Узнать решение задачи: `make problems/1059/answer.txt`
