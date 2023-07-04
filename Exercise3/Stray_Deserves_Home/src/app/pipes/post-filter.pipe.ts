import { Pipe, PipeTransform } from '@angular/core';
import { post } from '../models/type';

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {

  transform(posts: post[], filterType: string): post[] {
    if(filterType=="All")
    return posts
    else
    return posts.filter(x=>x.adoption_type==filterType.toLowerCase())
  }

}
