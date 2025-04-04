<script>
import Quiz from "$components/Quiz.svelte"; 
import Execute from "$components/Execute.svelte";
</script>

## *tail*

The `tail` command can be used to check the end of a file:

```bash
tail SAOUHSC.bed
```

as with `head`, use _-n_ to set the number of line to display. 

<Quiz id="qstep04session03" choices={[
	{ valid: false, value: "cds-YP_498677.1"},
	{ valid: false, value: "cds-YP_498678.1"},
	{ valid: false, value: "cds-YP_498679.1"},
	{ valid: true, value: "cds-YP_498680.1"},
]}>
	<span slot="prompt">
		Print the last line of the SAOUHSC.bed file. What is the name of the last CDS ? Choose the right answer:
	</span>
</Quiz>
