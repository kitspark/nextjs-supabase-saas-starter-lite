{ pkgs, ... }:

{
  packages = [pkgs.jq];
  languages.typescript.enable = true;
  languages.javascript.enable = true;
  languages.javascript.package = pkgs.nodejs_24;
  languages.javascript.pnpm.enable = true;
  dotenv.enable = true;
  enterShell = ''
    pnpm --version
  '';
}
