import { Pipe, PipeTransform } from '@angular/core';
import { SearchItemModel } from '../../shared/models/search-item.model';

@Pipe({
  name: 'filterByWord',
})
export class FilterByWordPipe implements PipeTransform {
  transform(value: SearchItemModel[], word: string): SearchItemModel[] {
    return value.filter((video) => {
      return (
        video.snippet.title.toLocaleLowerCase().includes(word.toLocaleLowerCase()) ||
        video.snippet.channelTitle.toLocaleLowerCase().includes(word.toLocaleLowerCase())
      );
    });
  }
}
