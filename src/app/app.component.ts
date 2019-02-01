import { Component } from '@angular/core';
/*
See diagram Input-Output
https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Angular_Input-Output_Diagram.html#R7V1bc5s6EP41niSdcQZMHMePsZ32tNM2PZN0zuWNgAKcAOJgObH76yuBZG7CiJutJO5kUrNISFrtrna%2FXZyBNvfWn0I9sL9BE7iDkWKuB9piMBpNFQX%2FJoRNTJiMr2KCFTpmTFITwp3zC1Ai7WetHBMsMw0RhC5ygizRgL4PDJSh6WEIX7LNHqGbHTXQLVAg3Bm6W6T%2B5ZjIjqkjTZsmN%2F4AjmXToTWNrdjTWWtKWNq6CV9SJO1moM1DCFH8yVvPgUuYxxgT9%2FtYcnc7sxD4SKTDvxYyb6e%2F7r9o3u23tfZn8HT3aUif8qy7K7piOlm0YSwI4co3AXmIMtBmL7aDwF2gG%2BTuC95zTLOR5%2BIrFX%2BkjwMhAuvSearb1WOxAdADKNzgJrSDRvlFJeaSXr4k7NdYEzvF%2BQkTGZ1uubV9csIU%2FIHypQaPRvLx6CLLI1XhMEnlMGk06YtJmvRM0qaCTNJ6Y9K4wBNgYnNDL2GIbGhBX3dvEuosy7UUh8DaQX8T8vmYXv2TurNY0x7RxYZd%2BHgZtNNoyghRv3NFHTNC0jm6yvT%2BAUIHcwOElPgfQGhDDbe%2BQhCTkoV8hTDIbChZ7%2B7txOyBq9AA1QqJ9NACqKpdUTxC4OrIec7Oo%2FO9viwohB4EQwN6AfSBXxAELOYou79LFMInMIcuJKz2cS9MfHRcN0fSXcfy8aWB%2BUh2ZUaUxsFH2DW94TmmGYkST%2BWy4tW91k1ELVNfOjfhGKZLN%2BI1XsilteU6peJBkhuMaDrPedJDmKfgnpx2TUi6R7bGTTdYBrrPWhBBWoIQb9MQuMAjG5NMId2w9szSnT%2F41kcYlj2ZcLLYB%2F%2F%2F%2F4o4NDMXayYW8GiWN2ySCnzME5dJlz4WMRjPluEzm8B40XQ5uYVUTznewroLULg%2FX6FuOr61ZR3b9XP8rw53MmL1sa1kCa9QjNqZPcTTNAi3tMU4ubqPzqHhqMzzgHjJj27kntvYXGID3b9plMBruxIwjpGK1jKNFTpZ0P9dWl%2BipWXi6D8sg1oqN54NJtzB0CYApdbimtfjJF7YSekc55E6Fzv6uld3qHuwRE2Hw7Ey2qHZJSN%2BWS3RPO5ZOuRkQUxsA5MtepgejYYEUYw6ljDWU7NsOjxqoBYDgMNzaSTdCaTy%2FHPJ2CSDzl0VuPLuoYNKnICpYCVQwBoKiMh%2BwAN1WtAK6pYzAAF1ePjJhiDk1O%2FgEAJ7cOcYQj72qwr84%2Fai7rLh6stS97oq4MVE4A5tQCPPegHvJHaqFRanxg6uQvzDyUIoEN250maxtXTMfYDmpj8ooWq5wb4HJNYoEqXuQZ5C9KcIkD741ufHpjvIJDuOEhXSPv4ZKakwUAzYyjKJ2POGk6ojvvEJcB2daGbvUlhrYyJLkbMg25g1MSIdwl5VotmFQnAH7lkJezSt7zESly96YovoE8BTBhdcGOmzH6zKQKRTXoeTBIkvQ5DOSiCrCjA6gqwaAoCTWurV8OypAhO5i8Ya4%2BywSk3RxC7HEoASmwwnvHfVYOPRTskAXzBQRyaUJ1dndMWz5nsuNJK%2FiObq4vBn3oX0XFJV7fAqdyw2qo8YMg2sLi3ShEVkP4jh6FhvFBsoVdRA9aZ4fVUc1a4RMqDxFDi9FAedxiDHPAQ6AuZZqQNYgVhA%2Fy56zjX2hUwcNFyAZ7ztZ4Nea4JOH%2FDGBNgBRe2nP2OP6nEF6VqgPcIwSdVRSpZ6qTiqlNOWpUbH6r1j9d4%2BqvdEtOxYy%2FdGgmz54qK3Wsx3urFJjsUheCPWkrPdstitsT927btreucz7mDReO6GmnuEb2MhX%2BhILz2BrmnWqtvTIh74O0F0tWsGms63N2g9Zupetx7hZHFWf1kNeSxGQrZTZmTOeWMLmSduz2C1tMtFTiqmCJAqq5m5qla3uvn18KOy5LqSH5U2YYc8ft8x%2BuviY5IAErHVJbXlbVg5352B6jdEbkUiRQxKZF%2B7n2dVgcTRYZcCoi9WeR4%2Bk5ErpJcgLcZGk4pNuRyrBPGfJuF3ORRKZiTQOq3IlmNirCoxxratMjHGGkqTGNOKSXWKN7%2FHWvrDp8c0Xvo%2BD1Pto5jeofVrQo4rp%2F%2FOkKoCkI7kq1%2FoXMhRbFXF%2FghDb0gCgBC6MixmMJ6d%2Blb0FVRnLZIFPni5S0dpfSULWgBngpJ9oH3Ym2JkKhFfqyQLcFQcU%2B9YA5LgWm4leFghBP12j%2BtWoh4QJir49zDAjpoeCr3o03yup4brGE8dlWEIFS%2F0lyHFk8C%2F4wk1NorcjGhWTDrMgr4H%2BETCgJf3PQR5T7JdwpP%2F5sPtCu149aHsHYZMxVQbIx9pc9Pe2LbXaH1DipluPAehjC5y9SbjjvQIuPK%2FrqUaWC%2FBnpu9%2BCAEPjcZscmrbXlfgslhXTMmFloJHUh5J7qecIu2PinNRrU8TzkekGwrOFwB3GG6tq8mKLfW%2B3kHrFHqOjkvhDsCr7SWUvbMtaAVr0zO1uW1mLmSNzMrfhz1x7r9ZmJJaUqtpypN8qJHd1%2BmxM1lwd%2B%2F%2FXn%2F4%2Bf924Xvtfy36V4Vd2HKC7p624Piyy2fv7%2FtLbjMbgEn7r3oZgfwZfLXAKJ7qb%2BpoN38Bg%3D%3D
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'JustContent'}];

  /**
   * onServerAdded
   * This function is only executable by a button on app.component
   */
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  /**
   * onBlueprintAdded
   * This function is only executable by a button on app.component
   */
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
      this.serverElements.push({
        type: 'blueprint',
        name: blueprintData.serverName,
        content: blueprintData.serverContent
      });
  }
  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }
}
