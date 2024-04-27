import { NgModule } from "@angular/core";
import {
    BrowserModule,
    provideClientHydration
} from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstComponent } from "./components/first/first.component";
import { UserDataComponent } from "./components/user-data/user-data.component";
import { TesteComponent } from "./components/teste/teste.component";
import { IfElseComponent } from "./components/if-else/if-else.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { ChangeNumberComponent } from "./components/change-number/change-number.component";
import { RenderListaComponent } from "./components/render-lista/render-lista.component";
import { PipeComponent } from "./components/pipe/pipe.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";

@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
        UserDataComponent,
        TesteComponent,
        IfElseComponent,
        EventosComponent,
        EmitterComponent,
        ChangeNumberComponent,
        RenderListaComponent,
        PipeComponent,
        TwoWayBindingComponent
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [provideClientHydration()],
    bootstrap: [AppComponent]
})
export class AppModule {}
