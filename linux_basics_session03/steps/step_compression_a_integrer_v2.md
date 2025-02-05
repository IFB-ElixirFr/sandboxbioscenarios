<script>
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>

## Compression

- Notion : en bioinformatique la manipulation de données volumineuse est courante. Une bonne pratique est de favoriser l'utilisation de fichier de taille réduite. Cela ce fait grace à la compression de fichier qui préserve le contenu du fichier tout en optimisant l'espace disque occupé. La compression change le format du fichier et le rend illisible pour un humain. On parle de fichier binaire.

- Notion2 : La décompression est l'étape qui permet à l'inverse de retrouver le contenu du fichier à l'origine et lisible par humain.

Il existe plusieurs outils de compression et décompression `gzip gunzip unzip` et `zcat`. 
Le format de compression le plus fréquent est `.gz` mais il en existe d'autre en bioininformatique, les fichiers BAM `.bam` sont des fichiers SAM (Sequence Alignement Map) `.sam` compressés (dans un format binaire Binary Alignement Map).

Comme déjà vue la commande `ls` permet d'indiquer la taille des fichiers. 

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





astuce : l'option `-sh` de `ls` permet d'afficher la taille des fichier de façon lisible.