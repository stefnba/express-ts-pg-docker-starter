import pgPromise from 'pg-promise';
import { config } from '../_app';

const pgp = pgPromise();
const db = pgp(config.database);

export { pgp, db };
