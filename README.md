# Решения задач проекта Diofant.ru

[![Build Status](https://travis-ci.org/vslinko/diofant.png?branch=master)](https://travis-ci.org/vslinko/diofant)

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
npm install
```

## Использование

* Проверить все задачи: `./diofant`
* Проверить задачу: `./diofant --problem 1059`
* Узнать решение всех задач: `./diofant --result`
* Узнать решение задачи: `./diofant --result --problem 1059`
