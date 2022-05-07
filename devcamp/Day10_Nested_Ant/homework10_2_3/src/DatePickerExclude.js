import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

<DatePicker locale={locale} />;
// The default locale is en-US, if you want to use other locale, just set locale in entry file globally.
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';

<ConfigProvider locale={locale}>
  <DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />
</ConfigProvider>;