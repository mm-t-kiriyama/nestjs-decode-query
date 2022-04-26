import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { SearchDecodeDto } from 'src/decode/dto/search-decode.dto';

@Injectable()
export class decodeQueryPipe implements PipeTransform {
  transform(queryParams: SearchDecodeDto) {
    // オブジェクトを配列に変換し、URLDecodeしてオブジェクトにし直す
    // SEE: https://qiita.com/i12_yuya_i15/items/f70e75924e52f25793a7
    return Object.entries(queryParams).reduce((acc, cur) => {
      const key = cur[0];
      const value = this.decodeQueryParam(cur[1]);

      return { ...acc, [key]: value };
    }, {});
  }

  // 文字列をDecodeする
  // SEE: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent#decoding_query_parameters_from_a_url
  decodeQueryParam(p: string) {
    return decodeURIComponent(p?.replace(/\+/g, ' '));
  }
}
