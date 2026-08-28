{
  description = "Dev env for the portfolio repo, with installed.";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
  flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = import nixpkgs { inherit system; };
      tex = pkgs.texlive.combine {
        inherit (pkgs.texlive)
          scheme-basic
          preprint
          titlesec
          marvosym
          enumitem
          hyperref
          fancyhdr
          babel;
      };
    in
    {
      devShells.default = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs
          pkgs.bun
          pkgs.jq

          pkgs.texlab
          tex
        ];

        shellHook = ''
          export NODE_ENV=development
          echo "ENTERING portfolio dev shell"
          nix flake metadata --json | jq '.description // "?No description?"'
          exec fish --login --interactive
        '';
      };
    }
  );
}
