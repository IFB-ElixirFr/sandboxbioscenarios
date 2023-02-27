#!/bin/bash

bash .scripts/intro-background_shared_bank.sh


# bed toy hg38
wget -O hg38_exons.bed.gz https://zenodo.org/record/5716151/files/hg38_exons.bed.gz?download=1
gunzip hg38_exons.bed.gz
mv hg38_exons.bed /shared/bank/homo_sapiens/hg38/bed/.

