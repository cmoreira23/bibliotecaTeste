import { NgModule } from '@angular/core';
import { FontSize } from './font-size/font-size';
import { FontColor } from './font-color/font-color';
import { Tutorial } from './tutorial/tutorial';
@NgModule({
	declarations: [FontSize,
	FontColor,
    Tutorial],
	imports: [],
	exports: [FontSize,
	FontColor,
    Tutorial]
})
export class DirectivesModule {}
