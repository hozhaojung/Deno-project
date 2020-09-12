# Deno project

A simple project that using Deno , a JavaScript runtime that builds for more secure 
runtime. Some article mentioned that Deno is more secure comparing to Node.js

# Installation
Official website: https://deno.land/
Shell (Mac, Linux):
```
curl -fsSL https://deno.land/x/install/install.sh | sh
```
PowerShell (Windows):
```
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

[Homebrew](https://formulae.brew.sh/formula/deno)  (Mac):
```
brew install deno
```

[Chocolatey](https://chocolatey.org/packages/deno)  (Windows):
```
choco install deno
```

[Scoop](https://scoop.sh/)  (Windows):
```
scoop install deno
```

Build and install from source using  [Cargo](https://crates.io/crates/deno)
```
cargo install deno
```


### Running application
```
deno run index.js
```
if caught Permission error:
```
deno run --allow-net --allow-read index.js
```
Open url:
http://localhost:8000/


### Running test
```
deno test
```
