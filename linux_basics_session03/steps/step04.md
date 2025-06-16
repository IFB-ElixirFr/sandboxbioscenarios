<script>
import Quiz from "$components/Quiz.svelte"; 
import Execute from "$components/Execute.svelte";
</script>

## Compression

In bioinformatics, the manipulation of large datasets is common. A good practice is to favour the use of smaller files. To do this, we use **file compression**, which preserves the content of the file while optimising the disk space occupied. Compression changes the format of the file, making it unreadable to a human being. This is known as a binary file.

**decompression** is the step that allows the file content to be restored to its original (and human-readable) state.

There are several compression and decompression tools, for example: `gzip gunzip unzip` and `zcat`.

The compression format depends on the compression method. The most common is `.gz` but there are others in bioinformatics, for example `.bam` files are compressed `.sam` (Sequence Alignment Map) files (in binary format, for Binary Alignment Map).

To experiment with compression/decompression, we're going to work with the largest file available to us.

As we have already seen, the `ls -lh` command can be used to indicate the size of files.

<Quiz id="ls_size" choices={[
	{ valid: false, value: "MACS2.csv"},
    { valid: false, value: "NC_009089.bed"},
	{ valid: false, value: "NC_009089.fasta"},
    { valid: false, value: "SAOUHSC.bed"},
    { valid: true, value: "SAOUHSC.fasta"},
]}>
	<span slot="prompt">
		Which file is the largest?
	</span>
</Quiz>

To compress the file with `gzip`:
```
gzip SAOUHSC.fasta
```

The file name has changed: it gained a `.gz` extention (for **gz**ip).
Check that its volume has been reduced.
```
ls -lh SAOUHSC.fasta.gz
```

With `man gzip`, we can see that the `-c` option keeps the file in its original form.

Restore the initial file with the `unzip` command:
```
gunzip SAOUHSC.fasta.gz
```
check that it is the same size as before it was compressed and has the same name (the `.gz` extension has disappeared)
 
