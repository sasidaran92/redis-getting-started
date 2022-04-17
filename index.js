import Redis from 'ioredis';
import Strings from './strings.js'
import Hashes from './hashes.js'
import Lists from './lists.js'
import Sets from './sets.js'
import SortedSets from './sortedsets.js';

const redis = new Redis({password : 'temppass'});

Strings(redis);
Hashes(redis);
Lists(redis);
Sets(redis);
SortedSets(redis);