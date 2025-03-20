%{
    int lines = 0, spaces = 0, tabs = 0, meta = 0, others = 0;
%}
%%
\n      { lines++; }
" "     { spaces++; }
\t      { tabs++; }
[!@#$%^&*()_+=<>?/\\|] { meta++; }
.      { others++; }
%%
int main() {
    yylex();
    printf("Lines: %d\nSpaces: %d\nTabs: %d\nMeta Characters: %d\nOther Characters: %d\n", 
           lines, spaces, tabs, meta, others);
    return 0;
}
int yywrap() { return 1; }
