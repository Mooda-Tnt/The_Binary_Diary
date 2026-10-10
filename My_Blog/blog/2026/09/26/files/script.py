#!/usr/bin/env python3

file = ""
flag = ""

with open("rev_this", "r") as f:
    file = f.read()

size = 24

for i in range(0, 8):
    flag += file[i]

for i in range(8, 23):
    if ((i & 1) == 0):
        flag += chr(ord(file[i]) - 0x05)
    else:
        flag += chr(ord(file[i]) + 2)

flag += "}"

print(f"Flag: {flag}")
