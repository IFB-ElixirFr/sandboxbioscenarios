<script>
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>

##  todo

```bash
todo
```


Some exmaple text

📕 text 1

📕 text 2


Example quizzz

<Quiz id="q1" choices={[
         { valid: false, value: "grep foo file01 > file02"},
         { valid: true, value: "grep foo file01 >> file02"},
         { valid: false, value: "grep foo file02 >> file01"},
	 { valid: false, value: "grep file01 file02 > foo"},
]}>
        <span slot="prompt">
	Which command appends its result at the end of the file02 file ?
        </span>
</Quiz>
