grep -r message *|grep "code"|grep "default"|awk '{
        if( match($0, /code:.*'[a-z]+'/) ) {
                str1=substr($0, RSTART, RLENGTH);
                code=substr(str1, index(str1,":"));
                code1=substr(code,  index(code,":")+index(code,"'\''"),index(code,",")-(index(code,"'\''")+2));

		if( match(str1, /default:.*'[a-z]+'/) ) {
                	str2=substr(str1, RSTART, RLENGTH);
                	code2=substr(str2, index(str2,":"));

                	code3=substr(code2,  index(code2,"'\''")+1,RLENGTH)
                	if (code3 ~ /{.*}/ ) {
                 		code4=substr(code2,  index(code2,"{")+1,index(code2,"}")-(index(code2,"'\''")+3));
                		print code1"="code4;
                	}else{
                 		code4=substr(code2,  index(code2,"'\''")+1,RLENGTH);
				if (code4 ~ /'\''/) { 
				code5=substr(code4,  0,index(code4,"'\''")-1)
                                	print code1"="code5;
				}else{
                			print code1"="code4;
				}
                	}
        	}
	}
	if( match($0, /code=.*/) ) {
                str1=substr($0, RSTART, RLENGTH);
                code=substr(str1, index(str1,"="));
                code1=substr(code,  index(code,"=")+index(code,"\""),index(code," ")-(index(code,"\"")+2));
		if( match(str1, /default=.*/) ) {
                        str2=substr(str1, RSTART, RLENGTH);
                        code2=substr(str2, index(str2,":"));
                        code3=substr(code2,  index(code2,"\"")+1,RLENGTH)
			if (code3 ~ /{.*}/ ) {

				code4=substr(code2,  index(code2,"{")+1,index(code2,"}")-(index(code2,"\"")+3));
                                print code1"="code4;
                        }else{
				code4=substr(code2,  index(code2,"\"")+1,RLENGTH)
				i=1;
				if (code4 ~ /^ [A-z]+/) { i=2; }
				code5=substr(code4,  i,index(code4,"\"")-1)
                                print code1"="code5;
			}
                }


        }
   }'|sort|uniq
