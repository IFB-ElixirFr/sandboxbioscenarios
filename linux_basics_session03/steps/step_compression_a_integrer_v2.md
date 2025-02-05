<script>
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>

## Compression

- Notion : en bioinformatique la manipulation de données volumineuses est courante. Une bonne pratique est de favoriser l'utilisation de fichiers de taille réduite. Cela ce fait grace à la **compression de fichier** qui préserve le contenu du fichier tout en optimisant l'espace disque occupé. La compression change le format du fichier et le rend illisible pour un humain. On parle de fichier binaire.

- Notion2 : La **décompression** est l'étape qui permet à l'inverse de retrouver le contenu du fichier à l'origine (et lisible par un humain).

Il existe plusieurs outils de compression et décompression, par exemple : `gzip gunzip unzip` et `zcat`. 

Le format de compression dépend de la méthode de compression. Le plus fréquent est `.gz` mais il en existe d'autres en bioininformatique, par exemple les fichiers BAM `.bam` sont des fichiers SAM (Sequence Alignement Map) `.sam` compressés (dans un format binaire, BAM pour Binary Alignement Map).

Pour expérimenter ces compression/décompression nous allons travailler avec le fichier le plus volumineux à notre disposition.
Comme déjà vu la commande `ls` permet d'indiquer la taille des fichiers. 

<Quiz id="ls_size" choices={[
	{ valid: false, value: "MACS2.csv"},
    { valid: false, value: "NC_009089.bed"},
	{ valid: false, value: "NC_009089.fasta"},
    { valid: false, value: "SAOUHSC.bed"},
    { valid: true, value: "SAOUHSC.fasta"},
]}>
	<span slot="prompt">
		Quel est le fichier avec la plus grande taille ?
	</span>
</Quiz>

Pour compresser le fichier avec `gzip`
```
gzip SAOUHSC.fasta
```

Vérifier que le volume a bine été réduit.
Avec `man gzip`, nous pouvons voir que l'option `-c` permet de conserver le fichier dans son formt initial.


astuce : l'option `-sh` de `ls` permet d'afficher la taille des fichier de façon lisible.
