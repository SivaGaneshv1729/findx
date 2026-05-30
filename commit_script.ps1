$status = git status --porcelain
$files = @()
foreach ($line in $status) {
    if ($line.Trim() -ne "") {
        # The porcelain format is XY PATH, we want PATH
        $path = $line.Substring(3)
        $files += $path
    }
}

$i = 0
while ($i -lt $files.Length) {
    $chunk = @()
    if ($i -lt $files.Length) { $chunk += $files[$i]; $i++ }
    if ($i -lt $files.Length) { $chunk += $files[$i]; $i++ }

    if ($chunk.Length -gt 0) {
        foreach ($file in $chunk) {
            git add $file
        }
        $msg = "Update " + ($chunk -join " and ")
        git commit -m $msg
    }
}
