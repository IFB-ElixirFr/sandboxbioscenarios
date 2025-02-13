# Debuging error 

“errare humaum est": when we write command lines, we often make mistakes. Hereafter, we suggest some of them, and indicate how to spot, interpret, and correct them.

## When you try seqkit -help, you get the help, but with an error before (and repeated at the end)
```
$ seqkit -help
```
this produces several lines including :
```
Error: unknown shorthand flag: 'e' in -elp
```
explication : pour demander l'aide, -help n'existe pas pour seqkit, c'est soit --help soit -h. Par contre, seqkit comprend "seqkit -h" et donc affichera l'aide. Pour les lettres restantes, "elp" il essaie de les traduire comme une composition de formes courtes (comme on peut aussi le faire pour une commande bash) mais bloque car "seqkit -e" n'existe pas.
Tips: 
- Error is often repaet in the the last line of the answer.
- The tool isn't always self-explanatory

## Quand on se trompe dans l'ordre et que l'on inverse un flag et la sous-commande, on obtient une erreur qui ... ne dit pas cela ...
$ seqkit -a stats NA12878.fasta
Error: unknown command "NA12878.fasta" for "seqkit"
explication : l'usage de seqkit indique que le mot suivant seqkit est une sous-commande, suivie éventuellement de flags. La syntaxe erronée ici est donc comprise comme seqkit + à cause du tiret, "-a" est bien considéré comme  puis
