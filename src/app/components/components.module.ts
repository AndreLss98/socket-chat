import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { ConversationItemComponent } from './conversation-item/conversation-item.component';

@NgModule({
  declarations: [ ConversationItemComponent ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [ ConversationItemComponent ]
})
export class ComponentsModule { }
