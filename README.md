# Introduktion till webbutveckling

## Mjukvara

### Visual Studio Code

- Installerad sen tidigare.

### Node.js

- Ladda ner och installera [Node](https://nodejs.org/en/) (LTS).
- Ni kan testa att ni lyckats installera Node korrekt genom att köra en .js-fil i vs code (som när ni kör en pythonfil)

```javascript
var test = "Hello world!";
console.log(test);
```


### GitHub

- Skapa ett [GitHub](https://github.com/) konto med din @edu.umea.se mail.
- Skapa ett publikt repo som du kallar **USERNAME.github.io**. byt ut USERNAME mot ditt användarnamn du nyss valt.

### Git

- Du kommer bli tvungen att ställa in så att din dator kan läsa och skriva till GitHub. För att göra detta behöver du generera en ssh-nyckel i PowerShell.

```bash
ssh-keygen -t rsa -b 4096 -C "uname@edu.umea.se"
cat ~/.ssh/id_rsa.pub
```

Den publika nyckeln kommer se ut på följande format:

```bash
ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSU
GPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3
Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XA
t3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/En
mZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbx
NrRFi9wrf+M7Q== schacon@mylaptop.local
```

Nyckeln läggs till under settings > SSH and GPG keys på din användare på GitHub.

Ladda sedan ned Git till din dator. [Ladda ned här!](https://git-scm.com/downloads)

