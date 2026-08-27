{
  description = "Dev env for the portfolio repo, with bun [but without latex-tools] installed.";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
  flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = import nixpkgs { inherit system; };
    in
    {
      devShells.default = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs
          pkgs.bun
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
