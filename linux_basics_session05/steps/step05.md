<script> 
  import Quiz from "components/Quiz.svelte"; 
  import Execute from "components/Execute.svelte"; 
</script> 

## calculer les statistiques d’une séquence

L’aide informe comment obtenir les statistiques pour un fichier. Les séquences peuvent être de formats, fasta ou fastq.

Si on lance seqkit stats => provoque une erreur qui explique que le flux d’entrée stdin n’est pas indiqué : 
`[ERRO] -: fastx: stdin not detected`

Il faut donc soit ajouter le fichier de séquence xxx.fasta soit le faire parvenir sur stdin (pipe)
seqkit stats xxx.fasta
cat xxx.fasta | seqkit stats

Quizz : Est-ce que les 2 sorties sont identiques ?
non car il n’y a pas le nom du fichier avec la redirection, mais les valeurs obtenues sont identiques

Pour plusieurs séquences : 
seqkit stats *.fasta => le tableau contient autant de lignes que de fichiers
cat *.fasta | seqkit stats => le tableau ne contient qu’une ligne qui donne les statistiques sur les séquences prises toutes ensemble.

Pour extraire les lignes d’entête :
seqkit seq -n /shared/bank/saccharomyces_cerevisiae/SacCer3/fasta/sacCer3.fa
Quizz : quel est l’équivalent en bash ? grep “>” *.fasta

A partir d’un fichier fasta multiple, on peut vouloir faire des stats sur chacun des chromosomes. Seqkit split permet de séparer le fichier multiple en fichiers individuels à partir desquels on peut calculer les statistiques : 
seqkit split -i --out-dir .  Saccharomyces_cerevisiae.R64-1-1.dna.toplevel.fa.gz
seqkit stats -T  *fa.gz

Afficher les statistiques selon la longueur croissante des séquences 
seqkit stats -T  *fa.gz | sort -k5,5 -g
