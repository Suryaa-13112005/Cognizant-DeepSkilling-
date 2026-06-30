SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE greet_user IS
BEGIN
    DBMS_OUTPUT.PUT_LINE('Welcome to Cognizant Digital Nurture!');
END;
/

BEGIN
    greet_user;
END;
/
