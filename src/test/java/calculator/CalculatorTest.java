package calculator;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import calculator.Calculator;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author mwn
 */
public class CalculatorTest {

    Calculator calculator = new Calculator();

    public CalculatorTest() {
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    // @Test
    // public void hello() {}
    @Test
    public void addNumber() {
        int res = calculator.add(4, 8);
        assertEquals(12, res);
    }

    @Test
    public void subNumber() {
        int res = calculator.sub(58, 42);
        assertEquals(16, res);
    }

    @Test
    public void mulNumber() {
        int res = calculator.mul(4, 8);
        assertEquals(32, res);
    }

    @Test
    public void divNumber() {
        int res = calculator.div(32, 8);
        assertEquals(8, res);
    }

    @Test (expected = ArithmeticException.class)
    public void divNumberArit() {
        calculator.div(0, 4);
    }
}
