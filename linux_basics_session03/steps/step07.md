<script>
import Quiz from "$components/Quiz.svelte";
</script>

## *cut*

The `cut` command cuts out sections from each line of a file and writes the result to standard output. 
It can be used to cut parts of a line by byte position, character and field (or columns). 

Basically the `cut` command slices the lines to extract some text.
This command is generally used to extract columns/fields from a file using the `-f/--fields` argument followed by the number(s) of the column(s) of interest (the first column/field is numbered 1).

By default `cut` expects the column/field separator to be a  tabulation (`\t`) as in `.bed` files. 

Here is an example on how to extract the 3rd column of the _SAOUHSC.bed_ file:

```bash
cut -f 3 SAOUHSC.bed
```

Multiple columns can be extracted using a comma between two column numbers or a `-` for a range of successive columns.

Try the extraction of the 3 first columns and the 5th one from the _SAOUHSC.bed_ file:

```bash
cut -f 1-3,6 SAOUHSC.bed
```

If the file contains columns separated by alternative characters (*e.g.* `,`, `;`, `:`, `|`, ...), you can change the column/field delimiter thanks to the `-d` option. 

Look at the beginning of the _MACS2.csv_ file (try `head MACS2.csv`). 
It contains 6 columns, separated by a comma.

<Quiz id="q1" choices={[    
      { valid: false, value: "cut -f 2,3,6 MACS2.csv"},
      { valid: false, value: "cut -f 2,3-6 MACS2.csv"},
      { valid: true, value: "cut -f 2,3,6 -d ',' MACS2.csv"},
      { valid: false, value: "cut -f 2,3-6 -d ',' MACS2.csv"},
      { valid: true, value: "cut -f 2-3,6 -d ',' MACS2.csv"},
      { valid: false, value: "cut -f 2,3,6 -d '\t' MACS2.csv"},
      { valid: false, value: "cut -f 2-3,6 -d '\t' MACS2.csv"}
]}> 
	<span slot="prompt">
    Choose the correct 2 commands to extract the 2nd, 3rd, and 6th columns of the `MACS2.csv` file:
	</span>
</Quiz>  
