<script>
import Quiz from "components/Quiz.svelte";
</script>

### *cut*

The `cut` command cuts out sections from each line of a file and writes the result to standard output. 
It can be used to cut parts of a line by byte position, character and field (or columns). 

Basically the `cut` command slices the lines to extract some text.
The main use of this command concerns the extraction of columns indicated by their number (first column is number 1).

Here is an example on how to extract the 3rd column of the _belebele.bed_ file:

```bash
cut -f 3 belebele.bed
```

Multiple columns can be extracted using a coma between two column numbers or a '-' for a range of successive columns.

Try the extraction of the 3 first columns and the 5th one from the _belebele.bed_ file:

```bash
cut -f 1-3,5 belebele.bed
```

You can change the delimiter between fields with option _-d_. 

Look at the beginning of the _peekaboo.csv_ file (try `head peekaboo.csv`). 
It contains 6 columns, separated by a comma.

<Quiz id="q1" choices={[    
      { valid: false, value: "cut -f 2,3,6 peekaboo.csv"},
      { valid: false, value: "cut -f 2,3-6 peekaboo.csv"},
      { valid: true, value: "cut -f 2,3,6 -d "," peekaboo.csv"},
      { valid: false, value: "cut -f 2,3-6 -d "," peekaboo.csv"},
      { valid: true, value: "cut -f 2-3,6 -d "," peekaboo.csv"},
      { valid: false, value: "cut -f 2,3,6 -t "/t" peekaboo.csv"},
      { valid: false, value: "cut -f 2-3,6 -t "/t" peekaboo.csv"}
]}> 
	<span slot="prompt">
    Choose the correct command(s) to extract the 2nd, 3rd, and 6th columns of the `peekaboo.csv` file:
	</span>
</Quiz>  
