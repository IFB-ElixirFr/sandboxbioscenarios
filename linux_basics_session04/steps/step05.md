<script>
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>

We have previously used the `cut` command to extract the second column from the *SOUHSC.bed* the `sort`to order the subsequent stream. We could have written both intructions on the same line using the `;` operator:

```bash
cut -f 2 SAOUHSC.bed > SAOUHSC_c2.bed; sort -u SAOUHSC_c2.bed > SAOUHSC_c2_uniq.bed
```

However this solution still requires to create an **intermediate file** (*SAOUHSC_c2.bed*) to perform the two operations.  

This is where another extremely important redirection operator comes into play: the `|` **pipe**. This operator can be used to transmit the text stream from one command to another, avoiding the creation of intermediate files. By default, the pipe pass the **stdout of one command to the stdin** of the following one.

<img src="/data/linux_basics_session04/stream_pipe.png" style="max-width:100%" alt="pipe organisation">

We can rewrite the previous set of instructions to state that the `sort` command no longer takes its input from a file, but rather from the output result/stream of the cut command.

```bash
cut -f 2 SAOUHSC.bed | sort -u > SAOUHSC_c2_uniq.bed
```

In the same way we can also send the result of the `sort` command to the `wc` to get the expected result onto the screen whitout any need to create two intermediate files.

```bash
cut -f 2 SAOUHSC.bed | sort -u | wc -l
```

<Quiz id="question1" choices={[
	{ valid: false, value: "head -n 6 SAOUHSC.bed | tail -n 1 SAOUHSC.bed "},
	{ valid: false, value: "head -n 1 SAOUHSC.bed | tail -n 6 SAOUHSC.bed"},
	{ valid: true, value: "head -n 6 SAOUHSC.bed | tail -n 1"},
	{ valid: false, value: "head -n 1 | tail -n 6 SAOUHSC.bed"},
	{ valid: false, value: "head -n 6 | tail -n 1 SAOUHSC.bed"},
]}>
	<span slot="prompt">
		Let say we want to extract the 6th line of the SAOUHSC.bed file. What would be the correct syntax to do this ?
	</span>
 </Quiz>
