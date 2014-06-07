grep -r message *|grep "code"|grep "default"|awk '{
        if( match($0, /code:.*'[a-z]+'/) ) {
                str1=substr($0, RSTART, RLENGTH);
                code=substr(str1, index(str1,":"));
                code1=substr(code,  index(code,":")+index(code,"'\''"),index(code,",")-(index(code,"'\''")+2));
		

		
	if( match(str1, /default:.*'[a-z]+'/) ) {
                str2=substr(str1, RSTART, RLENGTH);
                code2=substr(str2, index(str2,":"));

                code3=substr(code2,  index(code2,"'\''")+1,RLENGTH)
		if (code3 ~ "'\''$\{" ) { 
		 code4=substr(code2,  index(code2,"'\''"),index(code2,"'\''"));
                print "AAA ----->"code1"="code4;
		}else{
		 code4=substr(code2,  index(code2,"'\''")+1,index(code2,",")-(index(code2,"'\''")+2));
                print "|||||||||----->"code1"="code4;
		}



        }

        }else{
	if( match($0, /code=.*"[a-z]+"/) ) {
                astr1=substr($0, RSTART, RLENGTH);
                acode=substr(astr1, index(astr1,"="));
                acode1=substr(acode,  index(acode,"=")+index(acode," "),index(acode,"\"")-index(acode,"\""));
        }
	if( match(astr1, /default=.*"[a-z]+"/) ) {
                astr11=substr(astr1, RSTART, RLENGTH);
                acodea1=substr(astr11, index(astr11,"="));
                acode11=substr(acodea1,  index(acodea1,"=")+index(acodea1," "),index(acodea1,"\"")-index(acodea1,"\""));
	 	print "________________________"acode1"="acode11;
        }
	}


   }'
