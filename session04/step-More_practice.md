## More practice

sur gff : col9, ID gene, tri, unique
compter le nombre de gènes par chr
extraire les CDS du gff

```bash
$ cut -f 9 ~/dubii/study-cases/Escherichia_coli/Escherichia_coli_str_k_12_substr_mg1655.ASM584v2.37.chromosome.Chromosome.gff3 | cut -d ";" -f 1 | grep "ID=gene" | sort -u | wc -l
```

