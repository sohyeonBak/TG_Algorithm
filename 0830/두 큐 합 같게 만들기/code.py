from collections import deque

def solution(queue1, queue2):
    answer = -1
    cnt = 0;
    totalLeng = len(queue1) * 3
    queue1Leng = sum(queue1)
    queue2Leng = sum(queue2)
    _queue1 = deque(queue1)
    _queue2 = deque(queue2)
    
    while cnt < totalLeng:
        if queue1Leng < queue2Leng:
            ele = _queue2.popleft()
            queue1Leng += ele
            queue2Leng -= ele
            _queue1.append(ele)
            cnt += 1
        elif queue1Leng > queue2Leng:
            ele = _queue1.popleft()
            queue2Leng += ele
            queue1Leng -= ele
            _queue2.append(ele)
            cnt += 1
        else:
            return cnt
    
    return answer