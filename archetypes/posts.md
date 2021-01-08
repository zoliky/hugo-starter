---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
author: Zoltan Kiraly
year: "{{ dateFormat "2006" .Date }}"
month: "{{ dateFormat "2006/01" .Date }}"
draft: false
---