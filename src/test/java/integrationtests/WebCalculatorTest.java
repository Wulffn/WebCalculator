/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package integrationtests;

import java.io.IOException;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import utils.HttpClient;

/**
 *
 * @author mwn
 */
public class WebCalculatorTest {

    HttpClient client = new HttpClient("http://localhost:7777/WebApplication/calculator");

    
    public WebCalculatorTest() {
    }

    
    @Test
    public void addNumber() throws IOException {
        String res = client.makeHttpRequest("?operation=add&n1=2&n2=3");
        assertEquals("Result of: 2+3= 5", res);
    }

    @Test
    public void subNumber() throws IOException {
        String res = client.makeHttpRequest("?operation=sub&n1=8&n2=5");
        assertEquals("Result of: 8-5= 3", res);
    }

    @Test
    public void mulNumber() throws IOException {
        String res = client.makeHttpRequest("?operation=mul&n1=8&n2=2");
        assertEquals("Result of: 8*2= 16", res);
    }

    @Test
    public void divNumber() throws IOException {
        String res = client.makeHttpRequest("?operation=div&n1=6&n2=3");
        assertEquals("Result of: 6/3= 2", res);
    }

    @Test (expected = ArithmeticException.class)
    public void divNumberArit() throws IOException {
        client.makeHttpRequest("?operation=div&n1=6&n2=0");
    }
}
