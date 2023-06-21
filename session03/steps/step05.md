<script>
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>
# Counting words or lines in a file
## *wc*

`wc` is the **w**ord **c**ount command. 
It counts the number of lines, words, and characters in files:

<Execute command="wc NC_009089.bed" />

The _NC_009089.bed_ has from left to right: 8 lines, 48 words and 364 characters.

To output only the number of lines, run `wc` with option _-l_:

<Execute command="wc -l NC_009089.bed" />

<Quiz id="q1" choices={[
	{ valid: false, value: "5"},
	{ valid: false, value: "28"},
	{ valid: false, value: "67"},
	{ valid: true, value: "150"},
]}>
	<span slot="prompt">
		How many lines has the SAOUHSC.bed file?
	</span>
</Quiz>

