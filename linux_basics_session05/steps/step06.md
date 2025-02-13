# Debuging error 

## Quand on essaie seqkit -help, on obtient bien l'aide mais avec une erreur avant (et répétée en fin)
$ seqkit -help
Error: unknown shorthand flag: 'e' in -elp
explication : pour demander l'aide, -help n'existe pas pour seqkit, c'est soit --help soit -h. Par contre, seqkit comprend "seqkit -h" et donc affichera l'aide. Pour les lettres restantes, "elp" il essaie de les traduire comme une composition de formes courtes (comme on peut aussi le faire pour une commande bash) mais bloque car "seqkit -e" n'existe pas.

## Quand on se trompe dans l'ordre et que l'on inverse un flag et la sous-commande, on obtient une erreur qui ... ne dit pas cela ...
$ seqkit -a stats NA12878.fasta
Error: unknown command "NA12878.fasta" for "seqkit"
explication : l'usage de seqkit indique que le mot suivant seqkit est une sous-commande, suivie éventuellement de flags. La syntaxe erronée ici est donc comprise comme seqkit + à cause du tiret, "-a" est bien considéré comme  puis
