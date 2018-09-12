import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';

import {ItemAppointmentsModal} from './item-appointments';

import {ToolbarUserTitleModule} from '../../../components/core/toolbar-user-title/toolbar-user-title.module';
import {PickItemAppointmentsModule} from '../../../components/browse/pick-item-appointments/pick-item-appointments.module';

@NgModule({
    declarations: [
        ItemAppointmentsModal
    ],
    imports: [
        IonicModule,
        CommonModule,
        TranslateModule.forChild(),
        ToolbarUserTitleModule,
        PickItemAppointmentsModule
    ],
    entryComponents: [
        ItemAppointmentsModal
    ]
})
export class ItemAppointmentsModalModule {
}

