import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { MyComponentComponent } from "../my-module/components/my-component/my-component.component";
import { AppComponent } from "../app/app.component";
import { NotFoundComponent } from "../app/notfound";
import { HelloComponent } from "../app/hello.component";

const routes: Routes = [
  { path: "", component: HelloComponent },
  { path: "mycomp", component: MyComponentComponent },
  { path: "mydyn", loadChildren : () => import('../my-dynamic/my-dynamic.module').then(m => m.MyDynamicModule)},  
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
