import OpenAI from 'openai';
import { OPENAI_key } from './constant';

const openai = new OpenAI({
  apiKey: OPENAI_key,
  dangerouslyAllowBrowser: true, // defaults to process.env["OPENAI_API_KEY"]
});

export default openai;