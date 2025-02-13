<script>
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>


##  Bash commands vs. Bioinformatics Tools

Specialized bioinformatics tools developed for specific scientific needs often differ from built-in Bash commands. They have distinct purposes, functionalities, and usage patterns. The goal of this session is to explore a bioinformatics tool and learn how to become familiar with its use.

Third-party tools often deviate from the conventions of native Bash commands. For instance:
 
 - Their argument/option format may differ from those of standard bash commands.
 - They often lack a manual page accessible through the man command.
 - These tools do not support piping, which can limit their integration into workflows.
 - Many are designed as toolkits, offering a collection of utilities bundled together for specific tasks.
 
There are no universal rules, and each tool needs to be explored individually. Consulting the help documentation is an essential part of learning how to use it.

## Installation

Unlike the built-in Bash command, these third-party tools may not be installed on your personal computer (or on other IT resources to which you have access). When the tool you're interested in isn't available, you'll need to install it (or ask your IT support). In bioinformatics, the CONDA tool is frequently used for installations, but will not be covered in this tutorial.
