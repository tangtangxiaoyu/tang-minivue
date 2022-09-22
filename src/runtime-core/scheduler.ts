let isFlushPending = false;
const queue:any = [];

const p = Promise.resolve();

export function queueJobs(job){
    if(!queue.includes(job)){
        queue.push(job);
    }
    queueFlush();
}

export function nextTick(fn){
    return fn ? p.then(fn) : p;
}

function queueFlush() {
    if(isFlushPending) return
    isFlushPending = true;
    nextTick(flushJobs);
}

function flushJobs(){
    let job; 
    isFlushPending = false;
    while((job = queue.shift())){
        job && job();
    }
}
